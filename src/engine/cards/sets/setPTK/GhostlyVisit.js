"use strict";
const Constants = require ("../../../Constants");
const GhostlyVisitBase = require("../setME3/GhostlyVisit");

class GhostlyVisit extends GhostlyVisitBase {
  constructor (game) {
    super(game, "Ghostly Visit", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = GhostlyVisit;
