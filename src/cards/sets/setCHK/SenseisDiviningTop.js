"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SenseisDiviningTop extends UnimplementedCard {
  constructor (game) {
    super(game, "Sensei's Divining Top", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SenseisDiviningTop;
