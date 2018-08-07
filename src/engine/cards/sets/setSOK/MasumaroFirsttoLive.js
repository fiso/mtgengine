"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasumaroFirsttoLive extends UnimplementedCard {
  constructor (game) {
    super(game, "Masumaro, First to Live", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MasumaroFirsttoLive;
