"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitsuneDiviner extends UnimplementedCard {
  constructor(game) {
    super(game, "Kitsune Diviner", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KitsuneDiviner;
