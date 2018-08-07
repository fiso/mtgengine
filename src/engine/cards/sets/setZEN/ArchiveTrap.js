"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchiveTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Archive Trap", "Zendikar", "ZEN");
  }
}

module.exports = ArchiveTrap;
