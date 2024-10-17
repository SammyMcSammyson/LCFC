import { db } from "@/utils/dbConnection";

export default function NewPostPage() {
  async function handleSavePost(formData) {
    "use server"; // makes this function run _on the server_, as if by magic API.
    console.log("Saving post to the database...");

    // get the form data from the formData object next provides
    const title = formData.get("title");
    const content = formData.get("content");

    // insert the data into postgres
    await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [title, content]);
    console.log("Post saved!");
  }

  return (
    <form action={handleSavePost}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />
      <button type="submit">Save</button>
    </form>
  );
}
 