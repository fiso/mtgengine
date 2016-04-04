"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgothianTreefolkBase = require("../setATQ/ArgothianTreefolk.js");

class ArgothianTreefolk extends ArgothianTreefolkBase {
  constructor(game) {
    super(game, "Argothian Treefolk", "Masters Edition IV", "ME4");
  }
}

module.exports = ArgothianTreefolk;
