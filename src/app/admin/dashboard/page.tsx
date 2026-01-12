import { auth } from '@/auth';
import { handleSignOut } from '@/lib/actions';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminDashboard() {
    const session = await auth();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-outfit text-[#2C3E50]">Admin Dashboard</h1>
                    <form action={handleSignOut}>
                        <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                            Sign Out
                        </Button>
                    </form>
                </div>

                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome back, {session?.user?.name || 'Admin'}!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                You have successfully logged in to the secure admin area.
                            </p>
                            <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 rounded-md border border-yellow-200">
                                <strong>Note:</strong> This is a protected route. If you try to access this while logged out, you will be redirected to the login page.
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
