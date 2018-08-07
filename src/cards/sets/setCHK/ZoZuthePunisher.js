"use strict";
const Constants = require ("../../../Constants");
const ZoZuthePunisherBase = require("../setDDS/ZoZuthePunisher");

class ZoZuthePunisher extends ZoZuthePunisherBase {
  constructor (game) {
    super(game, "Zo-Zu the Punisher", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ZoZuthePunisher;
