"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkkiRockspeaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Akki Rockspeaker", "Champions of Kamigawa", "CHK");
  }
}

module.exports = AkkiRockspeaker;
