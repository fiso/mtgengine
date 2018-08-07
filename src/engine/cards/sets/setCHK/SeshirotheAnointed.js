"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeshirotheAnointed extends UnimplementedCard {
  constructor (game) {
    super(game, "Seshiro the Anointed", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SeshirotheAnointed;
