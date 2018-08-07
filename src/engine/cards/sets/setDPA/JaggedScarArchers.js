"use strict";
const Constants = require ("../../../Constants");
const JaggedScarArchersBase = require("../setDDU/JaggedScarArchers");

class JaggedScarArchers extends JaggedScarArchersBase {
  constructor (game) {
    super(game, "Jagged-Scar Archers", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = JaggedScarArchers;
