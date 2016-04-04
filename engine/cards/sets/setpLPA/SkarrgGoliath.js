"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkarrgGoliathBase = require("../setGTC/SkarrgGoliath.js");

class SkarrgGoliath extends SkarrgGoliathBase {
  constructor(game) {
    super(game, "Skarrg Goliath", "Launch Parties", "pLPA");
  }
}

module.exports = SkarrgGoliath;
