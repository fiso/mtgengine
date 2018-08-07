"use strict";
const Constants = require ("../../../Constants");
const EzuriRenegadeLeaderBase = require("../setDDU/EzuriRenegadeLeader");

class EzuriRenegadeLeader extends EzuriRenegadeLeaderBase {
  constructor (game) {
    super(game, "Ezuri, Renegade Leader", "Commander 2014", "C14");
  }
}

module.exports = EzuriRenegadeLeader;
