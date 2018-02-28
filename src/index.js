import './sass/main.sass'

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
    $('#navContent > a').attr('href', 'https://www.pmweb.com.br/').attr('title', 'Pmweb').attr('target', '_blank')

    // Logo Footer
    $('#footerContent .footerFirstLine p:nth-child(2)').html('<a href="https://www.pmweb.com.br/" target="_blank" title="Desenvolvido por Pmweb"><img src="//i.imgur.com/FGgG2NO.png" alt="Logotipo Pmweb" /><a/>')


    /**
     * Slick Slider fix
     */
    // Slider lazy auto update
    let currentSlide = $('.slick-list').find('.slick-slide.slick-current.slick-active')

    // Get width to set in active sliders
    let width = $('.slider-imagens-hotel')[0].clientWidth

    currentSlide.each((index, element) => {
        let el = $(element)
        let img = el.find('img')
        let src = el.find('a').attr('data-thumb')
        el.css({width: width})
        img.src = src

    })

    // It is required to fix the uninitialized slick bug
    $('.slider-imagens-hotel').slick('slickNext')
    $('.slider-imagens-hotel').slick('slickPrev')


    /**
     * blocoReserve order
     */
    let blockContainers = $('.blocoReserve')

    blockContainers.each((index, element) => {
        let el = $(element)
        let target = el.find('> .itemVarValorSemDesconto')

        // If element is inside of the container
        if(!target.length) return

        // Remove the target from outside container
        target.remove()

        // Add target to container
        $('.valorContainer').append(target)

    })
}
component()
