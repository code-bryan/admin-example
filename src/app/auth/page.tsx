import BaseButton from "@/components/atoms/base-button";
import BaseText from "@/components/atoms/base-text";
import Form from "@/components/molecules/form";
import AuthTemplate from "@/components/templates/auth-template";
import { translate } from "@/translate";

export default async function Login() {
  return (
    <AuthTemplate
      Aside={<></>}
    >
      <div className="flex flex-col gap-3">
        <BaseText.HeadingOne text={translate('auth.title')} className="text-gray-700" />
        <BaseText.BodyOne text={translate('auth.description')} className="text-gray-400" />
      </div>

      <div className="flex flex-col gap-4">
        <Form.TextInput className="w-full" placeholder="your@example.com" />
        <Form.PasswordInput className="w-full" placeholder={translate('auth.password-placeholder')} />
        <BaseText.BodyOne text={translate('auth.forgot-button')} className="text-gray-500 self-end" />

        <BaseButton text={translate('auth.login-button')} />
      </div>
    </AuthTemplate>
  );
}