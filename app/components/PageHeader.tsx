interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-navy pt-32 pb-16 px-8 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <div className="flex items-center space-x-4">
            <div className="h-0.5 w-12 bg-gold"></div>
            <p className="text-gray-300 tracking-wide uppercase text-sm font-semibold">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
