"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KondaLordofEiganjo extends UnimplementedCard {
  constructor (game) {
    super(game, "Konda, Lord of Eiganjo", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KondaLordofEiganjo;
