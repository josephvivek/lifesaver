const talukasData = {
    thiruvananthapuram: ['Taluka1', 'Taluka2', 'Taluka3'],
    kollam: ['Taluka4', 'Taluka5', 'Taluka6'],
    pathanamthitta: ['Taluka7', 'Taluka8', 'Taluka9'],
    alappuzha: ['Taluka10', 'Taluka11', 'Taluka12'],
    kottayam: ['Taluka13', 'Taluka14', 'Taluka15'],
    idukki: ['Taluka16', 'Taluka17', 'Taluka18'],
    ernakulam: ['Taluka19', 'Taluka20', 'Taluka21'],
    thrissur: ['Taluka22', 'Taluka23', 'Taluka24'],
    palakkad: ['Taluka25', 'Taluka26', 'Taluka27'],
    malappuram: ['Taluka28', 'Taluka29', 'Taluka30'],
    kozhikode: ['Taluka31', 'Taluka32', 'Taluka33'],
    wayanad: ['Taluka34', 'Taluka35', 'Taluka36'],
    kannur: ['Taluka37', 'Taluka38', 'Taluka39'],
    kasaragod: ['Taluka40', 'Taluka41', 'Taluka42'],
    // Add more talukas data as needed
  };

  // Function to populate taluka dropdown based on the selected district
  function populateTalukas() {
    const districtSelect = document.getElementById('district');
    const talukaSelect = document.getElementById('taluka');
    const selectedDistrict = districtSelect.value;

    // Clear existing options
    talukaSelect.innerHTML = '<option value="" disabled selected>Select Taluka</option>';

    // Populate taluka options based on the selected district
    talukasData[selectedDistrict].forEach(taluka => {
      const option = document.createElement('option');
      option.value = taluka;
      option.textContent = taluka;
      talukaSelect.appendChild(option);
    });
  }

  // Event listener to trigger the population of talukas when the district changes
  document.getElementById('district').addEventListener('change', populateTalukas);

  // Initial population of talukas based on the default district
  populateTalukas();