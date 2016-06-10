"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UyoSilentProphet extends UnimplementedCard {
  constructor (game) {
    super(game, "Uyo, Silent Prophet", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UyoSilentProphet;
