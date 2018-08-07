"use strict";
const Constants = require ("../../../Constants");
const WindreaderSphinxBase = require("../setM19/WindreaderSphinx");

class WindreaderSphinx extends WindreaderSphinxBase {
  constructor (game) {
    super(game, "Windreader Sphinx", "Magic 2014", "M14");
  }
}

module.exports = WindreaderSphinx;
