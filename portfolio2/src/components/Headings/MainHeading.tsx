interface Props {
    children: any;
    headingType: string;
   }

export function MainHeading ({children, headingType }:Props) {
    return <h1 className={headingType}>{children}</h1>
}