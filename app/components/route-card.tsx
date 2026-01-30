import Link from "next/link";

type RouteCardProps = {
  href: string;
  label: string;
  description: string;
};

function formatUrl(href: string) {
  const [path, query] = href.split("?");
  if (!query) return { path, params: [] };

  const params = query.split("&").map((param) => {
    const isUtm = param.startsWith("utm_");
    return { param, isUtm };
  });

  return { path, params };
}

export function RouteCard({ href, label, description }: RouteCardProps) {
  const { path, params } = formatUrl(href);

  return (
    <Link
      href={href}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {label}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-3">{description}</p>
      <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
        <span className="text-blue-600 dark:text-blue-400">{path}</span>
        {params.length > 0 && (
          <>
            <span className="text-gray-500">?</span>
            {params.map(({ param, isUtm }, i) => (
              <span key={param}>
                {i > 0 && <span className="text-gray-500">&</span>}
                <span
                  className={
                    isUtm
                      ? "text-gray-400 dark:text-gray-600"
                      : "text-green-600 dark:text-green-400"
                  }
                >
                  {param}
                </span>
              </span>
            ))}
          </>
        )}
      </code>
    </Link>
  );
}
