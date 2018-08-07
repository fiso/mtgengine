"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerventStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Fervent Strike", "Dominaria", "DOM");
  }
}

module.exports = FerventStrike;
