"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QasaliAmbusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Qasali Ambusher", "Shards of Alara", "ALA");
  }
}

module.exports = QasaliAmbusher;
