import './sass/main.sass';

let component = () => {
    // Remove elements
    (() => {
        // Remove "Quero este quarto"
        $('.itemBtnSelecionarAcomodacao').remove()

        // Remove percentual
        $('.itemVarPercentualDesconto').remove()

        // Remove parse
        $('.itemVarDescricaoFormasPagamento').remove()

    })()
}
component()
