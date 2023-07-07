import Link from "next/link";

function index() {
  return (
    <div>
      <Link href="/today/completedtasks">completed tasks</Link>
    </div>
  );
}

export default index;
