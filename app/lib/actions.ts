"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: Number(formData.get("amount")) * 100,
    status: formData.get("status"),
  };
  const date = new Date().toISOString().split("T")[0];
  // Test it out:
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${rawFormData.customerId as string}, ${rawFormData.amount}, ${
      rawFormData.status as string
    }, ${date})
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function updateInvoice(id: string, formData: FormData) {
  //   await new Promise((res) => {
  //     setTimeout(() => {
  //       res("hola");
  //     }, 4000);
  //   });
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: Number(formData.get("amount")) * 100,
    status: formData.get("status"),
  };
  const date = new Date().toISOString().split("T")[0];

  await sql`
    UPDATE invoices
    SET customer_id = ${rawFormData.customerId as string}, amount = ${
      rawFormData.amount
    }, status = ${rawFormData.status as string}
    WHERE id = ${id}
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath("/dashboard/invoices");
}
