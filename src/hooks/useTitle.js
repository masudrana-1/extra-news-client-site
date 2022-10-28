import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        // document.title = title;
        document.title = `${title} - Extra News`;
    }, [title])
};

export default useTitle;