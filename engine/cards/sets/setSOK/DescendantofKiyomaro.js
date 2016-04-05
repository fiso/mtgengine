"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DescendantofKiyomaro extends UnimplementedCard {
  constructor(game) {
    super(game, "Descendant of Kiyomaro", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DescendantofKiyomaro;
