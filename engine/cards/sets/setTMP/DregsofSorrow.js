"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DregsofSorrowBase = require("../setC14/DregsofSorrow.js");

class DregsofSorrow extends DregsofSorrowBase {
  constructor(game) {
    super(game, "Dregs of Sorrow", "Tempest", "TMP");
  }
}

module.exports = DregsofSorrow;
