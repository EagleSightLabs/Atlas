const Bookmark = ( { bookmarkName, bookmarkUrl, bookmarkDescription } ) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg mb-5">
            <div className="flex justify-between mb-2">
                <a href="bookmark-url" className="text-white-500 hover:underline">
                    Bookmark Name
                </a>
                <span className="text-gray-400">Bookmark Description</span>
            </div>
        </div>
    )
};

export default Bookmark;