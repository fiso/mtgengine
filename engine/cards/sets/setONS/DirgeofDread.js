"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DirgeofDreadBase = require("../setC13/DirgeofDread.js");

class DirgeofDread extends DirgeofDreadBase {
  constructor(game) {
    super(game, "Dirge of Dread", "Onslaught", "ONS");
  }
}

module.exports = DirgeofDread;
