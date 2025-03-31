export const home = () => {
    const body = document.querySelector('.body');
    const content = document.getElementById('content');
    const contentWrapper = document.createElement('div');
    const mainContent = document.createElement('div');
    const footer = document.createElement('footer');
    const header = document.createElement('div');
    const reviewer = document.createElement('div');
    const reviewText = document.createElement('div');
    const reviewBox = document.createElement('div');
    const workHoursContainer = document.createElement('div');
    const workHoursText = document.createElement('div');
    const workHoursHeader = document.createElement('div');
    const sunday = document.createElement('p');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');
    const locationContainer = document.createElement('p');
    const locationHeader = document.createElement('p');
    const locationText = document.createElement('p');

    locationContainer.className = 'locationContainer';
    locationHeader.className = 'locationHeader';
    locationText.className = 'locationText';

    locationContainer.append(locationHeader, locationText);

    workHoursContainer.className = 'workHoursContainer';
    workHoursText.className = 'workHoursText';
    workHoursHeader.className = 'workHoursHeader';

    sunday.className = 'workHoursListElement';
    monday.className = 'workHoursListElement';
    tuesday.className = 'workHoursListElement';
    wednesday.className = 'workHoursListElement';
    thursday.className = 'workHoursListElement';
    friday.className = 'workHoursListElement';
    saturday.className = 'workHoursListElement';

    footer.textContent = 'hello';
    locationHeader.textContent = 'Location';
    locationText.textContent = '123 Forest Drive, Forestville, Maine';
    workHoursHeader.textContent = 'Hours';
    sunday.textContent = 'Sunday: 8am - 8pm';
    monday.textContent = 'Monday: 6am - 6pm';
    tuesday.textContent = 'Tuesday: 6am - 6pm';
    wednesday.textContent = 'Wednesday: 6am - 6pm';
    thursday.textContent = 'Thursday: 6am - 10pm';
    friday.textContent = 'Friday: 6am - 10pm';
    saturday.textContent = 'Saturday: 8am - 10pm';

    workHoursText.append(
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
    );
    workHoursContainer.append(workHoursHeader, workHoursText);

    reviewer.className = 'reviewer';
    reviewText.className = 'review-text';
    reviewBox.className = 'review-box';
    reviewer.textContent = "Goldilocks";
    reviewText.textContent = "Beary's has the best raw meat! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    reviewBox.append(reviewText, reviewer);

    header.className = 'header';
    footer.className = 'footer';
    mainContent.className = 'mainContent';
    contentWrapper.className = 'contentWrapper';

    header.textContent = "Beary's Breakfast Bar";
    
    mainContent.append(header, reviewBox, workHoursContainer, locationContainer);
    contentWrapper.append(mainContent);  // Footer appended inside contentWrapper
    content.append(contentWrapper, footer);
}
