"use strict";
const Constants = require ("../../../Constants");
const ArgothianTreefolkBase = require("../setATQ/ArgothianTreefolk");

class ArgothianTreefolk extends ArgothianTreefolkBase {
  constructor (game) {
    super(game, "Argothian Treefolk", "Masters Edition IV", "ME4");
  }
}

module.exports = ArgothianTreefolk;
