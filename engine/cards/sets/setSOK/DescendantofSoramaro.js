"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DescendantofSoramaro extends UnimplementedCard {
  constructor(game) {
    super(game, "Descendant of Soramaro", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DescendantofSoramaro;
