"use strict";
const Constants = require ("../../../Constants");
const QasaliSlingersBase = require("../setC17/QasaliSlingers");

class QasaliSlingers extends QasaliSlingersBase {
  constructor (game) {
    super(game, "Qasali Slingers", "You Make the Cube", "PZ2");
  }
}

module.exports = QasaliSlingers;
