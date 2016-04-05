"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AyumitheLastVisitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Ayumi, the Last Visitor", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = AyumitheLastVisitor;
