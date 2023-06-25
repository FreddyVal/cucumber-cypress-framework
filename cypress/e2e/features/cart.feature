Feature: Carrito de compras

    Como usuario
    Quiero agregar elementos al carrito de compras
    Para validar su comportamiento cuando se agregar y quitan elementos

    @smoke
    Scenario Outline: Scenario Outline name: El usuario agrega y elimina un elemento del carrito de compras
        Given El usuario ingresa a '<pagina>'
        When Agrega un '<producto>' al carrito de compras desde el modulo de '<modulo>'
        Then El producto '<producto>' se muestra en la opcion del carrito de compras
        Then Al eliminar el producto del carrito ya no se muestra

        Examples:
            | pagina                        | producto          | modulo  |
            | https://www.demoblaze.com/    | Nokia lumia 1520  | Phones  |