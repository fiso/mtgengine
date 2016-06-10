"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YokedPlowbeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Yoked Plowbeast", "Shards of Alara", "ALA");
  }
}

module.exports = YokedPlowbeast;
