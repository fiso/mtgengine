"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DescendantofKiyomaro extends Card {
  constructor(game) {
    super(game, "Descendant of Kiyomaro", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DescendantofKiyomaro;
