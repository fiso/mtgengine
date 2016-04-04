"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NomadOutpostBase = require("../setDDN/NomadOutpost.js");

class NomadOutpost extends NomadOutpostBase {
  constructor(game) {
    super(game, "Nomad Outpost", "Khans of Tarkir", "KTK");
  }
}

module.exports = NomadOutpost;
