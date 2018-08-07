"use strict";
const Constants = require ("../../../Constants");
const ZoZuthePunisherBase = require("../setDDS/ZoZuthePunisher");

class ZoZuthePunisher extends ZoZuthePunisherBase {
  constructor (game) {
    super(game, "Zo-Zu the Punisher", "You Make the Cube", "PZ2");
  }
}

module.exports = ZoZuthePunisher;
