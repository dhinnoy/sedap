export default function Information({info, className}){
    return(
        <div className={className}>
					<p className="font-semibold">
						{info}
					</p>
		</div>
    )
}