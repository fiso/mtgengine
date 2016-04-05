"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CounseloftheSoratami extends UnimplementedCard {
  constructor(game) {
    super(game, "Counsel of the Soratami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CounseloftheSoratami;
