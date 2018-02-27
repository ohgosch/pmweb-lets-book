import './sass/main.sass';

let component = () => {
    /**
     * Remove elements
     */
    // Remove "Quero este quarto"
    $('.itemBtnSelecionarAcomodacao').remove()

    // Remove percentual
    $('.itemVarPercentualDesconto').remove()

    // Remove parse
    $('.itemVarDescricaoFormasPagamento').remove()

    // Remove message "hotel indisponível"
    $('.hotel-indisponivel-texto-titulo-roomnightperiodo').remove()

    /**
     * Add content
     */
    // Doctype Footer
    $('#footerContent .footerFirstLine p:first-child').html('© 2015 Booking Engine. Todos os direitos reservados.')

    // Logo Header
    $('#navContent > a').html('<img src="//i.imgur.com/FGgG2NO.png" alt="Logotipo Pmweb" />')

    // Logo Header href
    $('#navContent > a').attr('href', 'https://www.pmweb.com.br/').attr('title', 'Pmweb').attr('target', '_blank');

    // Logo Footer
    $('#footerContent .footerFirstLine p:nth-child(2)').html('<a href="" title="Desenvolvido por Pmweb"><img src="//i.imgur.com/FGgG2NO.png" alt="Logotipo Pmweb" /><a/>')
}
component()
