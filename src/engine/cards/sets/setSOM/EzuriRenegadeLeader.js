"use strict";
const Constants = require ("../../../Constants");
const EzuriRenegadeLeaderBase = require("../setDDU/EzuriRenegadeLeader");

class EzuriRenegadeLeader extends EzuriRenegadeLeaderBase {
  constructor (game) {
    super(game, "Ezuri, Renegade Leader", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EzuriRenegadeLeader;
