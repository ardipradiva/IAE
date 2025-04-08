export default function Create() {

    return (
        <>
        <h1>Create a new post</h1>

        <form>
            <div>
                <input type="text" placeholder="Post Title"/>
            </div>

            <div>
                <textarea rows="6" placeholder="Post Content"></textarea>
            </div>

            <button className="primary-btn">Create</button>
        </form>
        </>
    )
}