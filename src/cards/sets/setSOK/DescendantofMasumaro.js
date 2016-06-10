"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DescendantofMasumaro extends UnimplementedCard {
  constructor (game) {
    super(game, "Descendant of Masumaro", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DescendantofMasumaro;
