"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlterReality extends UnimplementedCard {
  constructor (game) {
    super(game, "Alter Reality", "Torment", "TOR");
  }
}

module.exports = AlterReality;
