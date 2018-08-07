'use strict';
const Constants = require('../../../Constants');
const LabyrinthMinotaurBase = require('../setME3/LabyrinthMinotaur');

class LabyrinthMinotaur extends LabyrinthMinotaurBase {
  constructor (game) {
    super(game, 'Labyrinth Minotaur', 'Fifth Edition', '5ED');
  }
}

module.exports = LabyrinthMinotaur;
