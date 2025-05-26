export default function PageHeader({title, breadscrumb, children}) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" className="text-gray-500">
                        {breadscrumb.join(' ')}
                    </span>
                </div>
            </div>

            <div className="flex gap-2">{children}</div>
        </div>
    );
}