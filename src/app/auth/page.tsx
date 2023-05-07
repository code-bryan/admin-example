import BaseButton from "@/components/atoms/base-button";
import BaseDivider from "@/components/atoms/base-divider";
import BaseText from "@/components/atoms/base-text";
import AuthTemplate from "@/components/templates/auth-template";
import { translate } from "@/translate";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import LoginForm from "@/components/organisms/login-form";

export default async function Login() {
  return (
    <AuthTemplate
      Aside={<></>}
    >
      <div className="flex flex-col gap-3">
        <BaseText.HeadingOne text={translate('auth.title')} className="text-gray-700" />
        <BaseText.BodyOne text={translate('auth.description')} className="text-gray-400" />
      </div>

      <LoginForm />

      <BaseDivider text="or" />

      <div className="flex gap-3">
        <BaseButton Icon={<FcGoogle size={20} />} variant="outline" text="Google" />
        <BaseButton Icon={<BsFacebook size={20} />} variant="outline" text="Facebook" />
      </div>

      <div className="flex flex-row gap-2 justify-center">
        <BaseText.BodyOne text={translate('auth.sign-up-description')} className="text-gray-400" />
        <Link href='/auth/register'>
          <BaseText.BodyOne text={translate('auth.sign-up-button')} className="text-gray-500" />
        </Link>
      </div>
    </AuthTemplate>
  );
}