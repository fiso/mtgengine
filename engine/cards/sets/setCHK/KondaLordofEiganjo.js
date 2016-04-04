"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KondaLordofEiganjo extends Card {
  constructor(game) {
    super(game, "Konda, Lord of Eiganjo", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KondaLordofEiganjo;
