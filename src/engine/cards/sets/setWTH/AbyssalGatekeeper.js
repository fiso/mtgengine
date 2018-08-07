"use strict";
const Constants = require ("../../../Constants");
const AbyssalGatekeeperBase = require("../setDVD/AbyssalGatekeeper");

class AbyssalGatekeeper extends AbyssalGatekeeperBase {
  constructor (game) {
    super(game, "Abyssal Gatekeeper", "Weatherlight", "WTH");
  }
}

module.exports = AbyssalGatekeeper;
